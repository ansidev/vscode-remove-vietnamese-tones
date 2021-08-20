//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { removeVietnameseTonesFromString } from '../extension';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

  // Defines a Mocha unit test
  test("Test function removeVietnameseTones", function() {
    assert.equal(removeVietnameseTonesFromString('à'), 'a');
    assert.equal(removeVietnameseTonesFromString('á'), 'a');
    assert.equal(removeVietnameseTonesFromString('ạ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ả'), 'a');
    assert.equal(removeVietnameseTonesFromString('ã'), 'a');
    assert.equal(removeVietnameseTonesFromString('â'), 'a');
    assert.equal(removeVietnameseTonesFromString('ầ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ấ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ậ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ẩ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ẫ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ă'), 'a');
    assert.equal(removeVietnameseTonesFromString('ằ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ắ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ặ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ẳ'), 'a');
    assert.equal(removeVietnameseTonesFromString('ẵ'), 'a');
    assert.equal(removeVietnameseTonesFromString('è'), 'e');
    assert.equal(removeVietnameseTonesFromString('é'), 'e');
    assert.equal(removeVietnameseTonesFromString('ẹ'), 'e');
    assert.equal(removeVietnameseTonesFromString('ẻ'), 'e');
    assert.equal(removeVietnameseTonesFromString('ẽ'), 'e');
    assert.equal(removeVietnameseTonesFromString('ê'), 'e');
    assert.equal(removeVietnameseTonesFromString('ề'), 'e');
    assert.equal(removeVietnameseTonesFromString('ế'), 'e');
    assert.equal(removeVietnameseTonesFromString('ệ'), 'e');
    assert.equal(removeVietnameseTonesFromString('ể'), 'e');
    assert.equal(removeVietnameseTonesFromString('ễ'), 'e');
    assert.equal(removeVietnameseTonesFromString('ì'), 'i');
    assert.equal(removeVietnameseTonesFromString('í'), 'i');
    assert.equal(removeVietnameseTonesFromString('ị'), 'i');
    assert.equal(removeVietnameseTonesFromString('ỉ'), 'i');
    assert.equal(removeVietnameseTonesFromString('ĩ'), 'i');
    assert.equal(removeVietnameseTonesFromString('ò'), 'o');
    assert.equal(removeVietnameseTonesFromString('ó'), 'o');
    assert.equal(removeVietnameseTonesFromString('ọ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ỏ'), 'o');
    assert.equal(removeVietnameseTonesFromString('õ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ô'), 'o');
    assert.equal(removeVietnameseTonesFromString('ồ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ố'), 'o');
    assert.equal(removeVietnameseTonesFromString('ộ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ổ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ỗ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ơ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ờ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ớ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ợ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ở'), 'o');
    assert.equal(removeVietnameseTonesFromString('ỡ'), 'o');
    assert.equal(removeVietnameseTonesFromString('ù'), 'u');
    assert.equal(removeVietnameseTonesFromString('ú'), 'u');
    assert.equal(removeVietnameseTonesFromString('ụ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ủ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ũ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ư'), 'u');
    assert.equal(removeVietnameseTonesFromString('ừ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ứ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ự'), 'u');
    assert.equal(removeVietnameseTonesFromString('ử'), 'u');
    assert.equal(removeVietnameseTonesFromString('ữ'), 'u');
    assert.equal(removeVietnameseTonesFromString('ỳ'), 'y');
    assert.equal(removeVietnameseTonesFromString('ý'), 'y');
    assert.equal(removeVietnameseTonesFromString('ỵ'), 'y');
    assert.equal(removeVietnameseTonesFromString('ỷ'), 'y');
    assert.equal(removeVietnameseTonesFromString('ỹ'), 'y');
    assert.equal(removeVietnameseTonesFromString('đ'), 'd');
    assert.equal(removeVietnameseTonesFromString('À'), 'A');
    assert.equal(removeVietnameseTonesFromString('Á'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ạ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ả'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ã'), 'A');
    assert.equal(removeVietnameseTonesFromString('Â'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ầ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ấ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ậ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ẩ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ẫ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ă'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ằ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ắ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ặ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ẳ'), 'A');
    assert.equal(removeVietnameseTonesFromString('Ẵ'), 'A');
    assert.equal(removeVietnameseTonesFromString('È'), 'E');
    assert.equal(removeVietnameseTonesFromString('É'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ẹ'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ẻ'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ẽ'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ê'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ề'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ế'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ệ'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ể'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ễ'), 'E');
    assert.equal(removeVietnameseTonesFromString('Ì'), 'I');
    assert.equal(removeVietnameseTonesFromString('Í'), 'I');
    assert.equal(removeVietnameseTonesFromString('Ị'), 'I');
    assert.equal(removeVietnameseTonesFromString('Ỉ'), 'I');
    assert.equal(removeVietnameseTonesFromString('Ĩ'), 'I');
    assert.equal(removeVietnameseTonesFromString('Ò'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ó'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ọ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ỏ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Õ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ô'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ồ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ố'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ộ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ổ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ỗ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ơ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ờ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ớ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ợ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ở'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ỡ'), 'O');
    assert.equal(removeVietnameseTonesFromString('Ù'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ú'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ụ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ủ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ũ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ư'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ừ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ứ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ự'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ử'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ữ'), 'U');
    assert.equal(removeVietnameseTonesFromString('Ỳ'), 'Y');
    assert.equal(removeVietnameseTonesFromString('Ý'), 'Y');
    assert.equal(removeVietnameseTonesFromString('Ỵ'), 'Y');
    assert.equal(removeVietnameseTonesFromString('Ỷ'), 'Y');
    assert.equal(removeVietnameseTonesFromString('Ỹ'), 'Y');
    assert.equal(removeVietnameseTonesFromString('Đ'), 'D');
  });
});
