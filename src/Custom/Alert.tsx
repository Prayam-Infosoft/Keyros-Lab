import {AlertCircle} from "lucide-react";
import {useRecoilValue} from "recoil";
import {errorAtom} from "@/store/atoms.ts";

export function AlertError() {
    const error = useRecoilValue(errorAtom);

    return (
        <>
            {error ? <div
                className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
                <AlertCircle className="mr-2 h-4 w-4"/>
                {error}
            </div> : null}
        </>
    )
}