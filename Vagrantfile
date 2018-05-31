Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/xenial64"
	config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network "public_network"
  # config.vm.network "forwarded_port", guest: 3000, host: 3000
  # config.vm.network "forwarded_port", guest: 27017, host: 27017

end
