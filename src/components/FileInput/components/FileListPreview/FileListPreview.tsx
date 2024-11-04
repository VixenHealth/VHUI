import React, {FC} from "react";
import {v4 as uuidv4} from "uuid";
import classNames from "classnames/bind";

import Remove from "../../../../assets/remove.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const FileListPreview: FC<Props> = ({files, setFiles}) => {
	const onRemove = (id: number) => {
		const filteredFiles = files.filter((file) => file.lastModified !== id);
		setFiles(filteredFiles);
	}
	
	return (
		<div className={cx("file-list")}>
			{files.map((file) => {
				const src = URL.createObjectURL(file);
				return (
					<div className={cx("file-list__item")} key={uuidv4()}>
						<div onClick={() => onRemove(file.lastModified)} className={cx("file-list-item__remove")}>
							<img src={Remove} alt=""/>
						</div>
						<div className={cx("file-list-item__img")}>
							<img src={src} alt=""/>
						</div>
						<div className={cx("file-list-item__name")}>{file.name}</div>
					</div>
				)
			})}
		</div>
	)
}