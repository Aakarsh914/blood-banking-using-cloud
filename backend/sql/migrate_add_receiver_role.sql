-- Allow RECEIVER role (required by the registration UI)
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check;
ALTER TABLE users ADD CONSTRAINT users_role_check
  CHECK (role IN ('DONOR', 'HOSPITAL', 'ADMIN', 'RECEIVER'));
