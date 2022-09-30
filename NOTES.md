mkdir /home/pantherus/.ssh

cp /root/.ssh/authorized_keys /home/pantherus/.ssh/authorized_keys

chown -R pantherus:pantherus /home/pantherus/.ssh

testuser:testtest

Your cert is in  /etc/acme.sh/brandonjf@gmail.com/pantherus.hopto.org/pantherus.hopto.org.cer 
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] Your cert key is in  /etc/acme.sh/brandonjf@gmail.com/pantherus.hopto.org/pantherus.hopto.org.key 
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] The intermediate CA cert is in  /etc/acme.sh/brandonjf@gmail.com/pantherus.hopto.org/ca.cer 
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] And the full chain certs is there:  /etc/acme.sh/brandonjf@gmail.com/pantherus.hopto.org/fullchain.cer 
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] Installing cert to:/etc/nginx/certs/pantherus.hopto.org/cert.pem
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] Installing CA to:/etc/nginx/certs/pantherus.hopto.org/chain.pem
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] Installing key to:/etc/nginx/certs/pantherus.hopto.org/key.pem
acme-companion   | [Tue Sep 27 06:46:13 UTC 2022] Installing full chain to:/etc/nginx/certs/pantherus.hopto.org/fullchain.pem

stop containers
docker kill $(docker ps -q)

remove containers
docker rm $(docker ps -a -q)

remove images
docker rmi $(docker images -q)

docker tag comminity comminity.brandonjf.com/comminity
docker tag api comminity.brandonjf.com/api 


  "docker build -f ./apps/api/Dockerfile . -t api",
          "docker tag api comminity.brandonjf.com/api",
          "docker push comminity.brandonjf.com/api"



 Git clean all untracked files including hidden folders: 
 git clean -fdx  

##Storybook: 

https://nx.dev/storybook/overview-react

 nx g @nrwl/storybook:configuration comminity --tsConfiguration=true

Generate storybook stories - ui is the project name here
nx g @nrwl/react:stories ui