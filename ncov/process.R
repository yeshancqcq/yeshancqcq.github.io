setwd("~/Documents/github/ncov")

library(readr)
library(stringr)
infec <- read_csv("data/infec.csv")
cities <- read_csv("data/cities.csv")


x <- str_detect("string", "t3r")


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
