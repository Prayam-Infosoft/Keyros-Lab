use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::json;
use crate::utils::generate_sign::generate_signature;

#[derive(Serialize, Deserialize, Debug)]
struct RequestBody {
    userId: String,
    licenseKey: String,
    signature: String,
}

#[derive(Serialize,Deserialize, Debug)]
struct SuccessResponse {
    status: String,
    token: Option<String>,
    refresh_token: Option<String>,
}

#[derive(Serialize,Deserialize, Debug)]
struct ErrorResponse {
    status: String,
}

#[tauri::command]
pub async fn validate_license(userid: &str, licensekey: &str, url: &str) -> Result<String, String> {
    let client = Client::new();
    let sign = generate_signature(userid, licensekey);

    let req_body = RequestBody {
        userId: userid.to_string(),
        licenseKey: licensekey.to_string(),
        signature: sign,
    };

    let response = client.post(url).json(&req_body).send().await.map_err(|e| {
        e.to_string()
    })?;

    if response.status().is_success() {
        let response_json: SuccessResponse = response.json().await.map_err(|e| e.to_string())?;
        Ok(json!(response_json).to_string())
    } else {
        let error_response: ErrorResponse = response.json().await.map_err(|e| e.to_string())?;
        Ok(json!(error_response).to_string())
    }
}
