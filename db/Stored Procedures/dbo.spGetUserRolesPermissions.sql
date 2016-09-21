SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE procedure [dbo].[spGetUserRolesPermissions] (@UserId as nvarchar(128)) as

select	r.Id RoleId, r.Name RoleName, isnull(urp.[Create], 0) [Create], isnull(urp.[Alter], 0) [Alter], 
		isnull(urp.[Delete], 0) [Delete], isnull(urp.[Read], 0) [Read]
from dbo.AspNetUsers u 
	join dbo.AspNetUserRoles ur on ur.UserId = u.Id
	join dbo.AspNetRoles r on r.Id = ur.RoleId
	left join dbo.UserRolesPermissions urp on urp.UserId = u.Id and urp.RoleId = r.Id
where u.Id = @UserId

GO
