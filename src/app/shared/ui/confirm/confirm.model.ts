import { ConfirmSeverity } from "./confirm-severity";

export interface ConfirmOptions {
    title?: string;
    message: string;
    severity?: ConfirmSeverity;
    acceptLabel?: string;
    rejectLabel?: string;
}
