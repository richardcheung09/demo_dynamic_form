import React, { useState, useEffect } from "react";

interface FileUploadProps {
  fieldDisplayName: string;
  fieldDisplaySubName?: string;
  fieldName: string;
  initialFiles: File[];
  entityId: string | null;
  supportedFileTypes: string;
  uponFileChange: (files: File[]) => void;
  isMultiple: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  fieldDisplayName,
  fieldDisplaySubName,
  fieldName,
  initialFiles,
  entityId,
  supportedFileTypes,
  uponFileChange,
  isMultiple,
}) => {
  const [files, setFiles] = useState<File[]>(initialFiles);
  const [error, setError] = useState<string | null>(null);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      // Check file types
      const fileArray = Array.from(newFiles);
      const invalidFiles = fileArray.filter(
        (file) => !supportedFileTypes.includes(file.type)
      );
      if (invalidFiles.length > 0) {
        setError(`Only files of type ${supportedFileTypes} are allowed.`);
        return;
      }

      // If no error, update the files and pass to the parent
      setError(null);
      setFiles(fileArray);
      uponFileChange(fileArray);
    }
  };

  // Clear all selected files
  const handleClearFiles = () => {
    setFiles([]);
    uponFileChange([]);
  };

  useEffect(() => {
    // Reset files when initialFiles changes (initial load)
    setFiles(initialFiles);
  }, [initialFiles]);

  return (
    <div className="file-upload-container">
      <div className="field-info">
        <label
          htmlFor={fieldName}
          className="block text-sm font-medium text-gray-700"
        >
          {fieldDisplayName}
        </label>
        <p className="text-xs text-gray-500">{fieldDisplaySubName}</p>
      </div>

      <div className="file-input-container">
        <input
          type="file"
          name={fieldName}
          id={fieldName}
          accept={supportedFileTypes}
          multiple={isMultiple}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => document.getElementById(fieldName)?.click()}
          className="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Upload {fieldDisplayName}
        </button>
      </div>

      {/* Display selected files */}
      {files.length > 0 && (
        <div className="mt-2 space-y-2">
          <p className="text-sm text-gray-600">Selected Files:</p>
          <ul className="space-y-1">
            {files.map((file, index) => (
              <li key={index} className="text-xs text-gray-800">
                {file.name}
              </li>
            ))}
          </ul>

          {/* Clear files button */}
          <button
            type="button"
            onClick={handleClearFiles}
            className="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            Clear All Files
          </button>
        </div>
      )}

      {/* Display error if any */}
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default FileUpload;
