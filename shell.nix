with import <nixpkgs> { };

mkShell {
  name = "report";
  version = "0.0.0";

  buildInputs = [ nodejs-18_x nodePackages.pnpm ];
}
