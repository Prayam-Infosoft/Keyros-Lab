import JsonView from "react18-json-view";
import {useRecoilValue} from "recoil";
import {refreshResponseAtom} from "@/store/atoms.ts";

export function RefreshResponse() {
    const refreshResponse = useRecoilValue(refreshResponseAtom);

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            {refreshResponse ? <JsonView src={refreshResponse}
                                         theme="vscode"/> : "No response yet. Click 'Refresh Token' to check."}
        </div>
    )
}