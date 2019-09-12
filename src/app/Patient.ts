import { Freesurfer } from "./model/Freesurfer";
import { FdtPipeline } from "./model/FdtPipeline";
import { TbssProcess } from "./model/TbssProcess";

export class Patient {
    name: string;
    id: number;
    dti: boolean;
    state: string;
    age: number;
    sex: string;
    fdtState: string;
    tbsState: string;
    freeSurfer: Freesurfer;
    verificado: boolean;
    fdtPipeline: FdtPipeline;
    tbssProcess: TbssProcess;
    patologico: boolean;
    resonadorId: number;
    fecha:  Date;
    ageUnit: string;
  }