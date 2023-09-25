"use client";

import { api } from "@/lib/api";
import { File, Upload } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

type Status =
  | "waiting"
  | "converting"
  | "uploading"
  | "generating"  
  | "success"
  | "error";

const statusMessages: { [key in Status]: string } = {
  waiting: "Aguardando arquivo",
  converting: "Convertendo...",
  generating: "Analisando...",
  uploading: "Enviando...",
  success: "Sucesso!",
  error: "Erro!",
};

const FILE_SIZE_LIMIT = 1024 * 1024 * 10; // 10 MB

interface AirportFileInputFormProps {}

export function AirportFileInputForm({}: AirportFileInputFormProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("waiting");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    const files: FileList | null = e.target.files;

    if (!files) {
      // Toast
      return;
    }

    setSelectedFiles(Array.from(files));
  }

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      const response = await api.post("/api/airports/new", formData);

      if (response.status === 200) {
        setStatus("success");
        console.log(response.data); // Access the results from the server here
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleUpload} className="space-y-8">
      <label
        htmlFor="fileUpload"
        className="relative w-full h-48 border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-4 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        <File className="w-6 h-6 text-theme" />
        <div className="flex flex-col gap-1 items-center">
          <span className="text-primary font-semibold text-lg">
            Selecione o arquivo
          </span>
          <span className="text-xs">Formato esperado: PMDG NavData.</span>
        </div>
      </label>

      <input
        type="file"
        id="fileUpload"
        accept=".txt"
        multiple
        className="sr-only"
        onChange={handleFileChange}
      />

      <Separator />

      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <span className="text-sm font-semibold text-muted-foreground">
            Arquivos selecionados
          </span>
          <div className="flex flex-col gap-2">
            {selectedFiles.map((file, index) => (
              <Card key={index} className="flex items-center p-3 gap-4">
                <File className="w-6 h-6 text-muted-foreground" />
                <div className="flex flex-col gap-1 grow">
                  <span className="text-sm font-medium">{file.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {file.size} bytes
                  </span>
                </div>
                <Button
                  variant="link"
                  className="opacity-80 hover:opacity-100 transition-all"
                  size="sm"
                  onClick={() => {
                    setSelectedFiles((files) =>
                      files.filter((_, i) => i !== index)
                    );
                  }}
                >
                  Remover
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 w-full justify-end">
        <Button
          variant="link"
          onClick={() => {
            setSelectedFiles([]);
            setStatus("waiting");
          }}
        >
          Limpar arquivos
        </Button>
        <Button
          data-success={status === "success"}
          disabled={status !== "waiting"}
          type="submit"
        >
          {status === "waiting" ? (
            <>
              Processar arquivos
              <Upload className="w-4 h-4 ml-2" />
            </>
          ) : (
            statusMessages[status]
          )}
        </Button>
      </div>
    </form>
  );
}
