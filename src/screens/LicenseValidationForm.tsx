import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useRecoilState} from "recoil";
import {licenseKeyAtom, userIdAtom, validateUrlAtom} from "@/store/atoms.ts";

export function LicenseValidationForm() {
    const [userId, setUserId] = useRecoilState(userIdAtom);
    const [licenseKey, setLicenseKey] = useRecoilState(licenseKeyAtom);
    const [validateUrl, setValidateUrl] = useRecoilState(validateUrlAtom);

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className={"w-full"}>
                        <Label htmlFor="userId">User ID</Label>
                        <Input
                            id="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder="PRAY-001-USER"
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Enter the unique identifier for the user or client</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Label htmlFor="licenseKey">License Key</Label>
                        <Input
                            id="licenseKey"
                            value={licenseKey}
                            onChange={(e) => setLicenseKey(e.target.value)}
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Enter the license key provided to the client</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Label htmlFor="validateUrl">Validate License URL</Label>
                        <Input
                            id="validateUrl"
                            value={validateUrl}
                            onChange={(e) => setValidateUrl(e.target.value)}
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        The URL of Prayam Infosoft's license validation endpoint
                    </p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}