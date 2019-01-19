//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { removeVietnameseTones } from '../extension';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

  // Defines a Mocha unit test
  test("Test function removeVietnameseTones", function() {
    assert.equal(removeVietnameseTones('à'), 'a');
    assert.equal(removeVietnameseTones('á'), 'a');
    assert.equal(removeVietnameseTones('ạ'), 'a');
    assert.equal(removeVietnameseTones('ả'), 'a');
    assert.equal(removeVietnameseTones('ã'), 'a');
    assert.equal(removeVietnameseTones('â'), 'a');
    assert.equal(removeVietnameseTones('ầ'), 'a');
    assert.equal(removeVietnameseTones('ấ'), 'a');
    assert.equal(removeVietnameseTones('ậ'), 'a');
    assert.equal(removeVietnameseTones('ẩ'), 'a');
    assert.equal(removeVietnameseTones('ẫ'), 'a');
    assert.equal(removeVietnameseTones('ă'), 'a');
    assert.equal(removeVietnameseTones('ằ'), 'a');
    assert.equal(removeVietnameseTones('ắ'), 'a');
    assert.equal(removeVietnameseTones('ặ'), 'a');
    assert.equal(removeVietnameseTones('ẳ'), 'a');
    assert.equal(removeVietnameseTones('ẵ'), 'a');
    assert.equal(removeVietnameseTones('è'), 'e');
    assert.equal(removeVietnameseTones('é'), 'e');
    assert.equal(removeVietnameseTones('ẹ'), 'e');
    assert.equal(removeVietnameseTones('ẻ'), 'e');
    assert.equal(removeVietnameseTones('ẽ'), 'e');
    assert.equal(removeVietnameseTones('ê'), 'e');
    assert.equal(removeVietnameseTones('ề'), 'e');
    assert.equal(removeVietnameseTones('ế'), 'e');
    assert.equal(removeVietnameseTones('ệ'), 'e');
    assert.equal(removeVietnameseTones('ể'), 'e');
    assert.equal(removeVietnameseTones('ễ'), 'e');
    assert.equal(removeVietnameseTones('ì'), 'i');
    assert.equal(removeVietnameseTones('í'), 'i');
    assert.equal(removeVietnameseTones('ị'), 'i');
    assert.equal(removeVietnameseTones('ỉ'), 'i');
    assert.equal(removeVietnameseTones('ĩ'), 'i');
    assert.equal(removeVietnameseTones('ò'), 'o');
    assert.equal(removeVietnameseTones('ó'), 'o');
    assert.equal(removeVietnameseTones('ọ'), 'o');
    assert.equal(removeVietnameseTones('ỏ'), 'o');
    assert.equal(removeVietnameseTones('õ'), 'o');
    assert.equal(removeVietnameseTones('ô'), 'o');
    assert.equal(removeVietnameseTones('ồ'), 'o');
    assert.equal(removeVietnameseTones('ố'), 'o');
    assert.equal(removeVietnameseTones('ộ'), 'o');
    assert.equal(removeVietnameseTones('ổ'), 'o');
    assert.equal(removeVietnameseTones('ỗ'), 'o');
    assert.equal(removeVietnameseTones('ơ'), 'o');
    assert.equal(removeVietnameseTones('ờ'), 'o');
    assert.equal(removeVietnameseTones('ớ'), 'o');
    assert.equal(removeVietnameseTones('ợ'), 'o');
    assert.equal(removeVietnameseTones('ở'), 'o');
    assert.equal(removeVietnameseTones('ỡ'), 'o');
    assert.equal(removeVietnameseTones('ù'), 'u');
    assert.equal(removeVietnameseTones('ú'), 'u');
    assert.equal(removeVietnameseTones('ụ'), 'u');
    assert.equal(removeVietnameseTones('ủ'), 'u');
    assert.equal(removeVietnameseTones('ũ'), 'u');
    assert.equal(removeVietnameseTones('ư'), 'u');
    assert.equal(removeVietnameseTones('ừ'), 'u');
    assert.equal(removeVietnameseTones('ứ'), 'u');
    assert.equal(removeVietnameseTones('ự'), 'u');
    assert.equal(removeVietnameseTones('ử'), 'u');
    assert.equal(removeVietnameseTones('ữ'), 'u');
    assert.equal(removeVietnameseTones('ỳ'), 'y');
    assert.equal(removeVietnameseTones('ý'), 'y');
    assert.equal(removeVietnameseTones('ỵ'), 'y');
    assert.equal(removeVietnameseTones('ỷ'), 'y');
    assert.equal(removeVietnameseTones('ỹ'), 'y');
    assert.equal(removeVietnameseTones('đ'), 'd');
    assert.equal(removeVietnameseTones('À'), 'A');
    assert.equal(removeVietnameseTones('Á'), 'A');
    assert.equal(removeVietnameseTones('Ạ'), 'A');
    assert.equal(removeVietnameseTones('Ả'), 'A');
    assert.equal(removeVietnameseTones('Ã'), 'A');
    assert.equal(removeVietnameseTones('Â'), 'A');
    assert.equal(removeVietnameseTones('Ầ'), 'A');
    assert.equal(removeVietnameseTones('Ấ'), 'A');
    assert.equal(removeVietnameseTones('Ậ'), 'A');
    assert.equal(removeVietnameseTones('Ẩ'), 'A');
    assert.equal(removeVietnameseTones('Ẫ'), 'A');
    assert.equal(removeVietnameseTones('Ă'), 'A');
    assert.equal(removeVietnameseTones('Ằ'), 'A');
    assert.equal(removeVietnameseTones('Ắ'), 'A');
    assert.equal(removeVietnameseTones('Ặ'), 'A');
    assert.equal(removeVietnameseTones('Ẳ'), 'A');
    assert.equal(removeVietnameseTones('Ẵ'), 'A');
    assert.equal(removeVietnameseTones('È'), 'E');
    assert.equal(removeVietnameseTones('É'), 'E');
    assert.equal(removeVietnameseTones('Ẹ'), 'E');
    assert.equal(removeVietnameseTones('Ẻ'), 'E');
    assert.equal(removeVietnameseTones('Ẽ'), 'E');
    assert.equal(removeVietnameseTones('Ê'), 'E');
    assert.equal(removeVietnameseTones('Ề'), 'E');
    assert.equal(removeVietnameseTones('Ế'), 'E');
    assert.equal(removeVietnameseTones('Ệ'), 'E');
    assert.equal(removeVietnameseTones('Ể'), 'E');
    assert.equal(removeVietnameseTones('Ễ'), 'E');
    assert.equal(removeVietnameseTones('Ì'), 'I');
    assert.equal(removeVietnameseTones('Í'), 'I');
    assert.equal(removeVietnameseTones('Ị'), 'I');
    assert.equal(removeVietnameseTones('Ỉ'), 'I');
    assert.equal(removeVietnameseTones('Ĩ'), 'I');
    assert.equal(removeVietnameseTones('Ò'), 'O');
    assert.equal(removeVietnameseTones('Ó'), 'O');
    assert.equal(removeVietnameseTones('Ọ'), 'O');
    assert.equal(removeVietnameseTones('Ỏ'), 'O');
    assert.equal(removeVietnameseTones('Õ'), 'O');
    assert.equal(removeVietnameseTones('Ô'), 'O');
    assert.equal(removeVietnameseTones('Ồ'), 'O');
    assert.equal(removeVietnameseTones('Ố'), 'O');
    assert.equal(removeVietnameseTones('Ộ'), 'O');
    assert.equal(removeVietnameseTones('Ổ'), 'O');
    assert.equal(removeVietnameseTones('Ỗ'), 'O');
    assert.equal(removeVietnameseTones('Ơ'), 'O');
    assert.equal(removeVietnameseTones('Ờ'), 'O');
    assert.equal(removeVietnameseTones('Ớ'), 'O');
    assert.equal(removeVietnameseTones('Ợ'), 'O');
    assert.equal(removeVietnameseTones('Ở'), 'O');
    assert.equal(removeVietnameseTones('Ỡ'), 'O');
    assert.equal(removeVietnameseTones('Ù'), 'U');
    assert.equal(removeVietnameseTones('Ú'), 'U');
    assert.equal(removeVietnameseTones('Ụ'), 'U');
    assert.equal(removeVietnameseTones('Ủ'), 'U');
    assert.equal(removeVietnameseTones('Ũ'), 'U');
    assert.equal(removeVietnameseTones('Ư'), 'U');
    assert.equal(removeVietnameseTones('Ừ'), 'U');
    assert.equal(removeVietnameseTones('Ứ'), 'U');
    assert.equal(removeVietnameseTones('Ự'), 'U');
    assert.equal(removeVietnameseTones('Ử'), 'U');
    assert.equal(removeVietnameseTones('Ữ'), 'U');
    assert.equal(removeVietnameseTones('Ỳ'), 'Y');
    assert.equal(removeVietnameseTones('Ý'), 'Y');
    assert.equal(removeVietnameseTones('Ỵ'), 'Y');
    assert.equal(removeVietnameseTones('Ỷ'), 'Y');
    assert.equal(removeVietnameseTones('Ỹ'), 'Y');
    assert.equal(removeVietnameseTones('Đ'), 'D');
  });
});
