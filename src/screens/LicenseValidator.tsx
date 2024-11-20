import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {KeyRound, RefreshCw, ShieldCheck} from "lucide-react";
import {TooltipProvider} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {invoke} from "@tauri-apps/api/core";

import {LicenseValidationForm} from "@/screens/LicenseValidationForm.tsx";
import {RefreshTokenForm} from "@/screens/RefreshTokenForm.tsx";
import {ValidateResponse} from "@/screens/ValidateResponse.tsx";
import {RefreshResponse} from "@/screens/RefreshResponse.tsx";
import {AlertError} from "@/Custom/Alert.tsx";
import {
    errorAtom,
    licenseKeyAtom,
    refreshResponseAtom,
    refreshTokenAtom,
    refreshUrlAtom,
    userIdAtom,
    validateResponseAtom,
    validateUrlAtom
} from "@/store/atoms.ts";

export default function PrayamMobileLicenseValidator() {
    const setError = useSetRecoilState(errorAtom);

    const [userId, setUserId] = useRecoilState(userIdAtom);
    const [licenseKey, setLicenseKey] = useRecoilState(licenseKeyAtom);
    const validateUrl = useRecoilValue(validateUrlAtom);

    const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
    const refreshUrl = useRecoilValue(refreshUrlAtom);

    const setValidateResponse = useSetRecoilState(validateResponseAtom);
    const setRefreshResponse = useSetRecoilState(refreshResponseAtom);

    const handleValidateLicense = async () => {
        setError("");
        if (!userId || !licenseKey) {
            setError("User ID and License Key are required");
            return;
        }
        try {
            const res: string = await invoke("validate_license", {
                userid: userId,
                licensekey: licenseKey,
                url: validateUrl,
            });
            setValidateResponse(JSON.parse(res));
        } catch (err) {
            setError("Failed to validate license. Please check your connection and try again.");
        }
    };

    const handleRefreshToken = async () => {
        setError("");
        if (!refreshToken) {
            setError("Refresh Token is required");
            return;
        }
        try {
            console.log(refreshUrl);
        } catch (err) {
            setError("Failed to refresh token. Please check your connection and try again.");
        }
    };
    const handleClear = () => {
        setUserId("");
        setLicenseKey("");
        setRefreshToken("");
        setValidateResponse("");
        setRefreshResponse("");
        setError("");
    };

    return (
        <TooltipProvider>
            <div className={"flex justify-center items-center w-[100svw] h-[100svh]"}>
                <Card className="w-full h-fit max-w-md mx-auto">
                    <CardHeader className="flex flex-col items-center space-y-2 pb-2">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <KeyRound className="w-10 h-10 text-blue-500"/>
                        </div>
                        <CardTitle className="text-xl font-bold text-center">
                            Verifio
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-full p-1">
                            <div className="space-y-4">
                                <LicenseValidationForm/>
                                <RefreshTokenForm/>
                            </div>

                            <AlertError/>

                            <Tabs defaultValue="validate" className="mt-6">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="validate">Validate License</TabsTrigger>
                                    <TabsTrigger value="refresh">Refresh Token</TabsTrigger>
                                </TabsList>
                                <TabsContent value="validate" className="mt-4">
                                    <ValidateResponse/>
                                </TabsContent>
                                <TabsContent value="refresh" className="mt-4">
                                    <RefreshResponse/>
                                </TabsContent>
                            </Tabs>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <Button
                            onClick={handleValidateLicense}
                            className="w-full flex items-center justify-center"
                        >
                            <ShieldCheck className="mr-2 h-4 w-4"/>
                            Validate License
                        </Button>
                        <Button
                            onClick={handleRefreshToken}
                            className="w-full flex items-center justify-center"
                        >
                            <RefreshCw className="mr-2 h-4 w-4"/>
                            Refresh Token
                        </Button>
                        <Button variant="outline" onClick={handleClear} className="w-full">
                            Clear
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </TooltipProvider>
    );
}
