-- CreateTable
CREATE TABLE "Delivery_log" (
    "id" TEXT NOT NULL,
    "delivery_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Delivery_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Delivery_log" ADD CONSTRAINT "Delivery_log_delivery_id_fkey" FOREIGN KEY ("delivery_id") REFERENCES "Delivery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
