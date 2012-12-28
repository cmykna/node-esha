test:
	@./node_modules/.bin/mocha --timeout 5000 --reporter spec -u bdd
.PHONY: test