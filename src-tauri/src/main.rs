#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn custom_command()  {
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
