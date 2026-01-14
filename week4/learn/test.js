let todoList = ["ซื้อของ", "ทํางานบ้าน", "อ่านหนังสือ"];
console.log(todoList);

todoList.splice(0, 2, "ออกกำลังกาย", "นัดเพื่อน", "test"); // เพิ่มรายการใหม่ 2 รายการ แทนที่ 3 รายการตั้งแต่ index 3
console.log(todoList);