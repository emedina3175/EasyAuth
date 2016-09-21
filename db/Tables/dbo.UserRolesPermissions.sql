CREATE TABLE [dbo].[UserRolesPermissions]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[UserId] [nvarchar] (128) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[RoleId] [nvarchar] (128) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[Create] [bit] NOT NULL CONSTRAINT [DF_UserRolesPermissions_Create] DEFAULT ((0)),
[Alter] [bit] NOT NULL CONSTRAINT [DF_UserRolesPermissions_Alter] DEFAULT ((0)),
[Delete] [bit] NOT NULL CONSTRAINT [DF_UserRolesPermissions_Delete] DEFAULT ((0)),
[Read] [bit] NOT NULL,
[UserAdd] [nvarchar] (128) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[DateAdd] [datetime] NOT NULL,
[UserUpd] [nvarchar] (128) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[DateUpd] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserRolesPermissions] ADD CONSTRAINT [PK_UserRolesPermissions] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserRolesPermissions] ADD CONSTRAINT [FK_UserRolesPermissions_AspNetRoles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[AspNetRoles] ([Id])
GO
ALTER TABLE [dbo].[UserRolesPermissions] ADD CONSTRAINT [FK_UserRolesPermissions_AspNetUsers] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id])
GO
