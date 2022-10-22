package dto

import "gorm.io/gorm"

//BillDto Bill data access structure
type BillDto struct {
	db *gorm.DB
}

func (d *BillDto) HelloWorld() string {
	return "Hello World!"
}
