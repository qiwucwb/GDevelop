// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdjsExporter {
  constructor(fs: gdAbstractFileSystem, gdjsRoot: string): void;
  setCodeOutputDirectory(path: string): void;
  exportProjectForPixiPreview(options: gdPreviewExportOptions): boolean;
  exportWholePixiProject(project: gdProject, exportDir: string, exportOptions: gdMapStringBoolean): boolean;
  exportWholeCocos2dProject(project: gdProject, debugMode: boolean, exportDir: string): boolean;
  getLastError(): string;
  delete(): void;
  ptr: number;
};