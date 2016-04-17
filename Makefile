.PHONY: compile help clean

all: clean setup compile

setup:
	bin/setup-closure

clean:
	rm -Rf tmp
	mkdir -p tmp
	rm -Rf bin/compiler.jar

compile:
	java -jar ./bin/compiler.jar --js src/libsvm/*.js -O SIMPLE --js_output_file dist/libsvm.js

help:
	java -jar ./bin/compiler.jar --help
