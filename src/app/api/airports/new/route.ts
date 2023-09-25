import { NextRequest, NextResponse } from "next/server";

interface Gate {
  gate: string;
  latitude: string;
  longitude: string;
}

interface AirportIdent {
  icao: string;
  name: string;
}

function parseGatesSection(data: string): Gate[] {
  const lines = data.split("\n");
  const gatesData: Gate[] = [];
  let isParsing = false;

  for (const line of lines) {
    if (isParsing) {
      if (line.startsWith("ENDGATES")) {
        break;
      }

      const [_, gate, latitudeDirection, latitudeDegrees, latitudeDecimalMinutes, longitudeDirection, longitudeDegrees, longitudeDecimalMinutes] = line.split(" ");
      const latitude = `${latitudeDirection} ${latitudeDegrees} ${latitudeDecimalMinutes}`.trim();
      const longitude = `${longitudeDirection} ${longitudeDegrees} ${longitudeDecimalMinutes}`.trim();
      gatesData.push({ gate, latitude, longitude });
    } else if (line.startsWith("GATES")) {
      isParsing = true;
    }
  }

  return gatesData;
}

function parseAirportIdent(data: string): AirportIdent {
  const firstLine = data.split("\n")[0].substring(2);
  const icao = firstLine.substring(0, 4);
  const name = firstLine.substring(4).trim().replace(/\(|\)/g, "");
  return { icao, name };
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log(data);
  const files: File[] = (data.getAll("file") as unknown as File[]).filter((file) => !!file);
  console.log(files);

  if (files.length === 0) {
    return NextResponse.json({ success: false, error: "No files uploaded" });
  }

  const results = files.map(async (file) => {
    console.log(file);
    const buffer = await file.arrayBuffer();
    const fileContent = Buffer.from(buffer).toString("utf-8");
    const ident = parseAirportIdent(fileContent);
    const gates = parseGatesSection(fileContent);
    return { ident, gates };
  });

  console.log(results);

  return NextResponse.json({ success: true, results });
}
