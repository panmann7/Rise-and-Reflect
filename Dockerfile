FROM mcr.microsoft.com/dotnet/sdk:8.0

RUN apt-get update -yq &&  \
  apt-get upgrade -yq &&   \
  apt-get install -yq curl

RUN curl -sL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -yq nodejs build-essential

WORKDIR /app
COPY  . .

RUN dotnet restore
RUN dotnet publish -o publish

WORKDIR /app/publish
ENV ASPNETCORE_URLS=http://+:80
CMD ["./JournalApp"]