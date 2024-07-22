using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc;
using Keycloak.AuthServices.Authentication;
using Keycloak.AuthServices.Authorization;
using Keycloak.AuthServices.Common;

var builder = WebApplication.CreateBuilder(args);

// dotnet run --urls http://+:5000
// builder.Services.AddKeycloakAuthentication(builder.Configuration);
builder.Services.AddKeycloakWebApiAuthentication(builder.Configuration);

builder.Services
    .AddCors(options => options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
builder.Services
    .AddAuthorization()
    .AddKeycloakAuthorization()
    .AddAuthorizationBuilder()
    .AddPolicy("policy1", policy => policy.RequireRealmRoles("role1"))
    .AddPolicy("policy2", policy => policy.RequireRealmRoles("role2"))
    .AddPolicy("policy3", policy => policy.RequireRealmRoles("role3"));


builder.Services.AddControllers();
var app = builder.Build();



if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
