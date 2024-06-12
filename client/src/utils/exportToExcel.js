import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data, fileName) => {
  // Crea una hoja de cálculo
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Convierte la hoja de cálculo a un archivo binario
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  // Crea un blob del archivo binario
  const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

  // Usa file-saver para descargar el archivo
  saveAs(dataBlob, `${fileName}.xlsx`);
};
