import JsonView from "react18-json-view";
import {useRecoilValue} from "recoil";
import {validateResponseAtom} from "@/store/atoms.ts";

export function ValidateResponse() {
    const validateResponse = useRecoilValue(validateResponseAtom);

    return (
        <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {validateResponse ?
                <JsonView src={validateResponse} theme="vscode" collapsed={false}
                          collapseStringMode="directly"
                          collapseStringsAfterLength={20}/> : "No response yet. Click 'Validate License' to check."}
        </div>
    )
}