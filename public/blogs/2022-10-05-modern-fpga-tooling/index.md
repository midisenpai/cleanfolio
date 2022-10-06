# Modern FPGA Tooling

## FuseSoC

1. Install asdf dependencies

   `apt install curl git`

1. Install asdf

   1. Clone the repository

      `git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.2`

   1. Append to ~/.bashrc

      ```. $HOME/.asdf/asdf.sh
      . $HOME/.asdf/completions/asdf.bash
      ```

   1. Restart shell

1. Add python plugin

   `asdf plugin-add python`

1. Install python library dependencies

   `sudo apt install libsqlite3-dev libreadline-dev zlib1g-dev libssl-dev libbz2-dev libffi-dev liblzma-dev`

1. Install python

   `asdf install python 3.9.7`

1. `cd` into project base directory

1. Set local python environment (python version used in this directory and subdirectories)

   `asdf local python 3.9.7`

1. Create a project environment directory using venv

   `python -m venv env`

1. Source the python project environment.

   `source env/bin/activate`

   This must be done anytime you intend to use the python project environment.

1. Install FuseSoC

   `pip install fusesoc`
