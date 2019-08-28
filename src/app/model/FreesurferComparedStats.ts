import { FreesurferComparedStat } from "./FreesurferComparedStat";
import { FreesurferComparedAsegStat } from "./FreesurferComparedAsegStat";
import { Patient } from "../Patient";
import { FreesurferComparedMeasureStat } from "./FreesurferComparedMeasureStat";
import { Annotation } from "./Annotation";
//import { FreesurferComparedMeasureStat } from "./FreesurferComparedMeasureStat";

export class FreesurferComparedStats {

    left: FreesurferComparedStat[];
    right: FreesurferComparedStat[];
    leftAparc2009Stat: FreesurferComparedStat[];
    rightAparc2009Stat: FreesurferComparedStat[];
    leftAparcDKTatlasStat: FreesurferComparedStat[];
    rightAparcDKTatlasStat: FreesurferComparedStat[];
    aseg: FreesurferComparedAsegStat[];
    wmParcStat: FreesurferComparedAsegStat[];
    pacientePatologico: Patient;
    cantidadPacientesSanos: number;
     volumenes: FreesurferComparedMeasureStat;
     leftAparcPialStat: FreesurferComparedStat[];
     rightAparcPialStat: FreesurferComparedStat[];
     annotations: Annotation[];
     ageAverage: number;
     date: Date;
 }