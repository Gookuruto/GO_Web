package controllers

import (
	"server/services"
	"time"
)

type BillControler struct {
	billService services.BillService
}

func (c *BillControler) AddBill(name string, price float64, date time.Time) string {
	return ""
}

func (c *BillControler) EditBill(id int64, name string, price float64) string {
	return ""
}

func (c *BillControler) RemoveBill(id int64) string {
	return ""

}
