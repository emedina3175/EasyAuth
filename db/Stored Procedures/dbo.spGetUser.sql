SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
create procedure [dbo].[spGetUser] (@UserName as nvarchar(256)) as

select *
from dbo.AspNetUsers 
where UserName = @UserName
GO
