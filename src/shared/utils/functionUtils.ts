import * as XLSX from "xlsx";

const clearZerosLeft = (value: string) => {
  return value?.replace(/^0+/, "");
};

const batchArray = <T>({
  arrayData,
  batchSize,
}: {
  arrayData: T[];
  batchSize: number;
}): T[][] => {
  const batches = [];
  for (let i = 0; i < arrayData.length; i += batchSize) {
    batches.push(arrayData.slice(i, i + batchSize));
  }
  return batches;
};

const sortArray = <T, K extends keyof T>({
  arrayData,
  key,
  order,
}: {
  arrayData: T[];
  key: K;
  order: "asc" | "desc";
}): T[] => {
  return arrayData.sort((a, b) => {
    if (order === "asc") {
      return a[key] > b[key] ? 1 : -1;
    }
    return a[key] < b[key] ? 1 : -1;
  });
};

interface IExportToFile<T> {
  data: T;
  fileName: string;
}

const exportToFile = <T>({ data, fileName }: IExportToFile<T>) => {
  const blob = new Blob([JSON.stringify(data)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.${"xlsx"}`;
  a.click();
  window.URL.revokeObjectURL(url);
};

interface IExportToCSV<T> {
  data: T[];
  fileName: string;
}

const exportToCSV = <T extends object>({ data, fileName }: IExportToCSV<T>) => {
  // Converte os dados para o formato de planilha do xlsx
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Converte a planilha para o formato CSV
  const csv = XLSX.utils.sheet_to_csv(worksheet);

  // Cria o arquivo CSV e o baixa no navegador
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

interface IOnPaste {
  text: string;
}

const onPaste = ({ text }: IOnPaste) => {
  const res = text
    .split(/[\s,;]+/)
    .filter((item) => item !== "")
    .join(",");
  return res;
};

export const functionUtils = {
  clearZerosLeft,
  batchArray,
  sortArray,
  exportToFile,
  exportToCSV,
  onPaste,
};
