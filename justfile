[private]
default:
    @just --list --unsorted

# Run the extension with hot-reload
[group('dev')]
[no-exit-message]
[working-directory: "extension"]
ext-dev:
    bun run dev:firefox

# Run the server in dev mode
[group('dev')]
[no-exit-message]
[working-directory: "server"]
server-dev:
    cargo run -p server

# Format/lint all files in the extension directory 
[group('lint')]
[no-exit-message]
[working-directory: "extension"]
ext-lint:
    bun run fmt

# Build and package the extension
[group('build')]
[no-exit-message]
[working-directory: "extension"]
ext-build:
    bun run dev:firefox

# Build and package the server
[group('build')]
[no-exit-message]
[working-directory: "server"]
server-build:
    cargo build -p server --release

