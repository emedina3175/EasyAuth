SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE procedure [dbo].[spGetCompany](@UserName as nvarchar(256)) as 
select c.*
from dbo.Companies c
	join dbo.CompanyUsers cu on cu.CompanyId = c.Id
	join dbo.AspNetUsers u on u.Id = cu.UserId
where u.UserName = @UserName

GO
