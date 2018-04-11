run:
	@echo "---- sshop ----"
	@docker build -t sshop .
	@docker run -it --rm -p 8001:9009 -d sshop