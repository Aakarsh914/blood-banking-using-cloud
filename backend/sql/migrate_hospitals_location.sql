-- Align hospitals table with Prisma Hospital model (distance sorting on donor/receiver dashboards)
ALTER TABLE hospitals
  ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION;

ALTER TABLE hospitals
  ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;
