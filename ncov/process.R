setwd("~/Documents/github/yeshancqcq.github.io/ncov")


library(readr)
library(stringr)
#infec <- read_csv("data/infec.csv")
#cities <- read_csv("data/cities.csv")
newdata <- read.csv("data/newdata.csv",encoding="UTF-8")
data2 <- read.csv("data/data2.csv",encoding="UTF-8")
placename <- read.csv("data/placename.csv",encoding="UTF-8")
county_data <- read.csv("data/us_county_data.csv",encoding="UTF-8")
geocodes <- read.csv("data/county_coor.csv",encoding="UTF-8")

x <- str_detect("string", "t3r")

data3 <- data.frame(city_cn=NA,
                    province_cn=data2$province_cn,
                    city=data2$city,
                    province=data2$province,
                    lat=data2$lat,
                    lon=data2$lon,
                    cure=data2$cure,
                    death=data2$death,
                    case=data2$case,
                    remain=data2$remain)

newdata$check <- 0

for(i in 1:nrow(data2)){
  for(j in 1:nrow(data3)){
    if(data2$city[i] == data3$city[j]){
      data3$city_cn[j] <- toString(data2$city_cn[i])
    }
  }
  cat("finishing", i, "\n")
}

for(i in 1:nrow(data3)){
  for(k in 1:nrow(newdata)){
    if(newdata$cityName[k] == data3$city_cn[i]){
      data3$cure[i] <- as.numeric(toString(newdata$curedCount[k]))
      data3$death[i] <- as.numeric(toString(newdata$deadCount[k]))
      data3$remain[i] <- as.numeric(toString(newdata$currentConfirmedCount[k]))
      data3$case[i] <- as.numeric(toString(newdata$confirmedCount[k]))
      newdata$check[k] <- 1
    }
  }
  cat("finishing", i, "\n")
}

#===========
for(i in 1:nrow(data3)){
  for(k in 1:nrow(newdata)){
    if(str_detect(toString(newdata$cityName[k]), toString(data3$city_cn[i])) &&
       is.na(data3$case[i])){
      data3$cure[i] <- as.numeric(toString(newdata$curedCount[k]))
      data3$death[i] <- as.numeric(toString(newdata$deadCount[k]))
      data3$remain[i] <- as.numeric(toString(newdata$currentConfirmedCount[k]))
      data3$case[i] <- as.numeric(toString(newdata$confirmedCount[k]))
      newdata$check[k] <- 1
    }
  }
  cat("finishing", i, "\n")
}
#==========

chongqing_dist = c("渝中区","江北区","大渡口区","南岸区","九龙坡区","两江新区","高新区","沙坪坝区" )
beijing_dist = c("西城区","海淀区","东城区","石景山区","朝阳区","丰台区","外地来京人员")
cq_cure <- 0
cq_death <- 0
cq_remain <- 0
cq_case <- 0
bj_cure <- 0
bj_death <- 0
bj_remain <- 0
bj_case <- 0

for(i in 1:nrow(newdata)){
  if(newdata$cityName[i] %in% chongqing_dist){
    cq_cure = as.numeric(cq_cure) + as.numeric(toString(newdata$curedCount[i]))
    cq_death <- cq_death + as.numeric(toString(newdata$deadCount[i]))
    cq_remain <- cq_remain + as.numeric(toString(newdata$currentConfirmedCount[i]))
    cq_case <- cq_case + as.numeric(toString(newdata$confirmedCount[i]))
  } else if (newdata$cityName[i] %in% beijing_dist){
    bj_cure <- bj_cure + as.numeric(toString(newdata$curedCount[i]))
    bj_death <- bj_death + as.numeric(toString(newdata$deadCount[i]))
    bj_remain <- bj_remain + as.numeric(toString(newdata$currentConfirmedCount[i]))
    bj_case <- bj_case + as.numeric(toString(newdata$confirmedCount[i]))
  }
  cat("finishing", i, "\n")
}
for(k in 1:nrow(data3)){
  if(data3$city_cn[k] == "重庆市区"){
    data3$cure[k] <- cq_cure
    data3$death[k] <- cq_death
    data3$remain[k] <- cq_remain
    data3$case[k] <- cq_case
  } else if (data3$city_cn[k] == "北京市区"){
    data3$cure[k] <- bj_cure
    data3$death[k] <- bj_death
    data3$remain[k] <- bj_remain
    data3$case[k] <- bj_case
  }
}
#========
for(i in 1:nrow(data3)){
  for(j in 1:nrow(placename)){
    if(placename$english[j] == data3$city[i]){
      data3$city_cn[i] <- toString(placename$chinese[j])
    }
  }
  cat("finishing", i, "\n")
}

write.csv(data3, file="data/data4.csv",fileEncoding="UTF-8")

output <- data.frame(city=infec$city, case=infec$case, cure=infec$cure, death=infec$death)

output$lat <- NA
output$lon <- NA

for(i in 1:nrow(output)){
  for(k in 1:nrow(cities)){
    if(str_detect(toString(cities$city[k]),toString(output$city[i]))){
      output$lat[i] <- cities$lat[k]
      output$lon[i] <- cities$lon[k]
    }
  }
  cat("processing", i, "\n")
}

write.csv(output, file="data/data.csv")

#================geocode==============

county_data$lat <- 0
county_data$lon <- 0

for(i in 1:nrow(county_data)){
  for(j in 1:nrow(geocodes)){
    if(str_detect(toString(county_data$place[i]), toString(geocodes$county[j])) &&
       str_detect(toString(county_data$state[i]), toString(geocodes$state[j]))){
      county_data$lat[i] <- geocodes$latitude[j]
      county_data$lon[i] <- geocodes$longitude[j]
      j <- nrow(geocodes - 2)
    }
  }
  cat("processing", i, "\n")
}

write.csv(county_data, file="data/county_data.csv",fileEncoding="UTF-8")
