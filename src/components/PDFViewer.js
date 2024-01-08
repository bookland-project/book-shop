import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useParams } from "next/navigation";

function PDFViewer() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const params = useParams();
	console.log(params);
	return (
		<div className="w-[100%] h-full flex justify-center items-center flex-col">
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
				<Viewer
					fileUrl="https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"
					plugins={[defaultLayoutPluginInstance]}
				/>
			</Worker>
		</div>
	);
}

export default PDFViewer;
