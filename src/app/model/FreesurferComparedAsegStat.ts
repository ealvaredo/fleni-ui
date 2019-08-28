import { FreesurferCell } from "./FreesurferCell";

export class FreesurferComparedAsegStat {

	  index: number;

	  segId: number;

	  nVoxels: number;

	  volume_mm3: FreesurferCell;

	  structureName: String;

	  normMean: FreesurferCell;

	  normStdDev: FreesurferCell;
	  normMin: FreesurferCell;

	  normMax: FreesurferCell;

	  normRange: FreesurferCell;

}