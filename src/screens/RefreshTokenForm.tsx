import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useRecoilState} from "recoil";
import {refreshTokenAtom, refreshUrlAtom} from "@/store/atoms.ts";

export function RefreshTokenForm() {
    const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom)
    const [refreshUrl, setRefreshUrl] = useRecoilState(refreshUrlAtom)

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Label htmlFor="refreshToken">Refresh Token</Label>
                        <Input
                            id="refreshToken"
                            value={refreshToken}
                            onChange={(e) => setRefreshToken(e.target.value)}
                            placeholder="Enter the refresh token"
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Enter the refresh token to get a new access token</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Label htmlFor="refreshUrl">Refresh Token URL</Label>
                        <Input
                            id="refreshUrl"
                            value={refreshUrl}
                            onChange={(e) => setRefreshUrl(e.target.value)}
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>The URL of Prayam Infosoft's token refresh endpoint</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}