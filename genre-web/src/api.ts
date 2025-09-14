import { type ParsedPrediction} from "./types";

export type Prediction = {
    label: string;
    confidence: number;
}

export async function predictGenre(file: File): Promise<Prediction>{
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/v1/genres/predict", {
        method: "POST",
        body: fd
    });

    if (!res.ok){
        const text = await res.text();
        throw new Error(`Server responded ${res.status}: ${text}`);
    }

    const json = (await res.json()) as Prediction;
    return json;
}