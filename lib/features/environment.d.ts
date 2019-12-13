import ModelViewerElementBase from '../model-viewer-base.js';
import { Constructor } from '../utilities.js';
export declare interface EnvironmentInterface {
    environmentImage: string | null;
    skyboxImage: string | null;
    backgroundColor: string;
    shadowIntensity: number;
    shadowSoftness: number;
    exposure: number;
}
export declare const EnvironmentMixin: <T extends Constructor<ModelViewerElementBase>>(ModelViewerElement: T) => Constructor<EnvironmentInterface> & T;
