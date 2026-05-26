-- Add columns expected by Prisma BloodRequest model
ALTER TABLE blood_requests
  ADD COLUMN IF NOT EXISTS requester_id INTEGER REFERENCES users(id);

ALTER TABLE blood_requests
  ADD COLUMN IF NOT EXISTS token VARCHAR(50);
