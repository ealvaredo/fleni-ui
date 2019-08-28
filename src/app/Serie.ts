import { Freesurfer } from "./model/Freesurfer";

export class Serie {
    name: string;
    id: string;
    processed: boolean;
    dcm2nii: boolean;
    time: number;
    dti: boolean;
    serieNumber: number;
    freesurfer: Freesurfer;
    ;
  }