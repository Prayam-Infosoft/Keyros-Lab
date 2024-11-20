use sha2::Sha256;
use hex::encode;
use hmac::{Hmac, Mac};
use std::env;

pub fn generate_signature(user_id: &str, license_key: &str) -> String {

    let message = format!("{}|{}", license_key, user_id);
    let secret = env::var("SECRET_KEY").expect("SECRET_KEY must be set");

    let mut mac = Hmac::<Sha256>::new_from_slice(secret.as_bytes())
        .expect("HMAC can take a key of any size");

    mac.update(message.as_bytes());

    let result = mac.finalize();
    let signature = encode(result.into_bytes());

    signature
}