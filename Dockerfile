#########################
### build environment ###
#########################
# base image
FROM node as builder

WORKDIR /app
# install and cache app dependencies
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@7.1.2

# add app
COPY . .


# generate build
RUN ng build --prod --named-chunks

##################
### production ###
##################

# base image
FROM nginx:alpine

# copy artifact build from the 'build environment'
COPY --from=builder /app/dist/kwikker/. /usr/share/nginx/html
# get configuration filees
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
