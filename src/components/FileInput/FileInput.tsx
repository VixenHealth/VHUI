import React, {FC, InputHTMLAttributes, useEffect, useState} from "react";
import classNames from "classnames/bind";

import FileImg from "../../assets/file-loader.svg"
import {FileListPreview} from "./components/FileListPreview";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	name: string;
	withPreview?: boolean;
	isMultiple?: boolean;
	getValue?: (value: File[]) => void;
}

export const FileInput: FC<Props> = ({
	                                     error,
	                                     name,
	                                     withPreview = false,
	                                     isMultiple = false,
	                                     getValue
                                     }) => {
	const [files, setFiles] = useState<File[]>([]);
	const acceptedExtensions = [".png", ".jpg", ".bmp"];
	
	useEffect(() => {
		if (getValue) {
			getValue(files)
		}
	}, [files]);
	
	const filterByAcceptedExtensions = (files: File[]) => {
		return files.filter((file) => {
			const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
			return acceptedExtensions.includes(fileExtension);
		});
	}
	
	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const droppedFiles = event.dataTransfer.files;
		if (droppedFiles.length > 0) {
			const newFiles = filterByAcceptedExtensions(Array.from(droppedFiles))
			
			if (newFiles.length > 0) {
				setFiles((prevFiles) => isMultiple ? [...prevFiles, ...newFiles] : [newFiles[0]]);
			}
		}
	};
	
	const handleClipboard = async (event: React.ClipboardEvent) => {
		const data = event.clipboardData;
		
		if (data.items) {
			for (const item of data.items) {
				if (item.kind === 'file' && (
					item.type.startsWith('image/png') ||
					item.type.startsWith('image/jpeg') ||
					item.type.startsWith('image/bmp'))
				) {
					const blob = item.getAsFile();
					if (blob) {
						setFiles((prevFiles) => isMultiple ? [...prevFiles, blob] : [blob]);
					}
				}
			}
		}
	}
	
	return (
		<div className={cx("file-input")}>
			<div
				className={cx("file-input__info", {error})}
				onDragOver={(e) => e.preventDefault()}
				onDrop={handleDrop}
			>
				<img className={cx("file-input__icon")} src={FileImg} alt=""/>
				<div className={cx("file-input__text")}>Загрузите файл в формате .png, .jpg, .bmp</div>
				<div className={cx("file-input__buttons")}>
					<div className={cx("file-input__button", "file-input__button-dark")}>
						<div>Выбрать файл</div>
						<input
							className={cx("file-input__input")}
							name={name}
							type="file"
							accept=".png,.jpg,.bmp"
							multiple={isMultiple}
						/>
					</div>
					<div onPaste={handleClipboard} className={cx("file-input__buffer")}>
						<input type="text" placeholder="Вставить из буфера"/>
					</div>
				</div>
			</div>
			{error && <div className={cx("file-input__error")}>{error}</div>}
			{files && withPreview && <FileListPreview setFiles={setFiles} files={files}/>}
		</div>
	)
}