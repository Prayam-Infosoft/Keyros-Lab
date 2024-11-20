// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

extern crate dotenv;
use dotenv::dotenv;

fn main() {
    dotenv().ok();
    verifio_lib::run()
}
